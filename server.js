// server.js
// where your node app starts

// init project
const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const requestProxy = require("express-request-proxy");
const app = express();


/////////////////////////////////////////////////////////////////////////////

// this url will return the data our page needs
app.get('/:type/page/:num', function(req, res) {
   
  // we're using the request library to get the HTML of the page.
  var type = req.params.type;
  var num = req.params.num;
  request('https://arthentai.net/'+type+'/page/'+num, function (err, response, body) {
    
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
      return;
    }
    
    // cheerio.load takes a string of HTML and returns a jQuery-like interface
    let $ = cheerio.load(body);
    
    // Looking for all elements with a class
    let itemElements = $('.cactus-post-item');
    let itemList = [];
    
    for (let i = 0; i < itemElements.length; i++) {
      // .eq(n) gets the nth item from an element collection
      let item = itemElements.eq(i);

      // .find() searches within an element for the selector
      let cover = item.find('.entry-content .picture .picture-content a img').attr('src');
      let title = item.find('.entry-content .content h3 a').text().trim();
      let likes = item.find('.entry-content .picture .cactus-note').text().trim();
      let url = item.find('.entry-content .picture .picture-content a').attr('href');
    
      itemList.push({
        cover, title, likes, url
      });
    }
    res.json(itemList);
  });
  
});


/////////////////////////////////////////////////////////////////////////////

// this url will return the data our page needs
app.get('/category/:cat', function(req, res) {
   
  // we're using the request library to get the HTML of the page.
  var cat = req.params.cat;
  request('https://arthentai.net/category/'+cat, function (err, response, body) {
    
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
      return;
    }
    
    // cheerio.load takes a string of HTML and returns a jQuery-like interface
    let $ = cheerio.load(body);
    
    // Looking for all elements with a class
    let itemElements = $('.cactus-post-item');
    let itemList = [];
    
    for (let i = 0; i < itemElements.length; i++) {
      // .eq(n) gets the nth item from an element collection
      let item = itemElements.eq(i);

      // .find() searches within an element for the selector
      let cover = item.find('.entry-content .picture .picture-content a img').attr('src');
      let title = item.find('.entry-content .content h3 a').text().trim();
      let likes = item.find('.entry-content .picture .cactus-note').text().trim();
      let url = item.find('.entry-content .picture .picture-content a').attr('href');
    
      itemList.push({
        cover, title, likes, url
      });
    }
    res.json(itemList);
  });
  
});


/////////////////////////////////////////////////////////////////////////////

// this url will return the data our page needs
app.get('/category/:cat/page/:num', function(req, res) {
   
  // we're using the request library to get the HTML of the page.
  var cat = req.params.cat;
  var num = req.params.num;
  request('https://arthentai.net/category/'+cat+'/page/'+num, function (err, response, body) {
    
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
      return;
    }
    
    // cheerio.load takes a string of HTML and returns a jQuery-like interface
    let $ = cheerio.load(body);
    
    // Looking for all elements with a class
    let itemElements = $('.cactus-post-item');
    let itemList = [];
    
    for (let i = 0; i < itemElements.length; i++) {
      // .eq(n) gets the nth item from an element collection
      let item = itemElements.eq(i);

      // .find() searches within an element for the selector
      let cover = item.find('.entry-content .picture .picture-content a img').attr('src');
      let title = item.find('.entry-content .content h3 a').text().trim();
      let likes = item.find('.entry-content .picture .cactus-note').text().trim();
      let url = item.find('.entry-content .picture .picture-content a').attr('href');
    
      itemList.push({
        cover, title, likes, url
      });
    }
    res.json(itemList);
  });
  
});

/////////////////////////////////////////////////////////////////////////////

// this url will return the data our page needs
app.get('/:type', function(req, res) {
   
  // we're using the request library to get the HTML of the page.
  var type = req.params.type;
  request('https://arthentai.net/'+type, function (err, response, body) {
    
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
      return;
    }
    
    // cheerio.load takes a string of HTML and returns a jQuery-like interface
    let $ = cheerio.load(body);
    
    // Looking for all elements with a class
    let itemElements = $('.cactus-post-item');
    let itemList = [];
    
    for (let i = 0; i < itemElements.length; i++) {
      // .eq(n) gets the nth item from an element collection
      let item = itemElements.eq(i);

      // .find() searches within an element for the selector
      let cover = item.find('.entry-content .picture .picture-content a img').attr('src');
      let title = item.find('.entry-content .content h3 a').text().trim();
      let likes = item.find('.entry-content .picture .cactus-note').text().trim();
      let url = item.find('.entry-content .picture .picture-content a').attr('href');
    
      itemList.push({
        cover, title, likes, url
      });
    }
    res.json(itemList);
  });
  
});

/////////////////////////////////////////////////////////////////////////////

// this url will return the data our page needs
app.get('/videos/:titles', function(req, res) {
   
  // we're using the request library to get the HTML of the page.
  var titles = req.params.titles;
  request('https://arthentai.net/'+titles, function (err, response, body) {
    
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
      return;
    }
    
    // cheerio.load takes a string of HTML and returns a jQuery-like interface
    let $ = cheerio.load(body);
    
    // Looking for all elements with a class
    let itemElements = $('.cactus-single-content');
    let itemList = [];
    
    for (let i = 0; i < itemElements.length; i++) {
      // .eq(n) gets the nth item from an element collection
      let item = itemElements.eq(i);

      // .find() searches within an element for the selector
      let request_url = 'https://arthentai.net/'+titles;
      let video_url = item.find('.style-post .cactus-post-format-video-wrapper .floating-video .cactus-video-content-api input').attr('value');
      let video_type = item.find('.style-post .cactus-post-format-video-wrapper .floating-video .cactus-video-content-api input').next().attr('value');
      let title = item.find('h1, .single-title .entry-title').text().trim();
      let views = item.find('.posted-on .view').text().trim();
      let likes = item.find('.posted-on .view').next().text().trim();
      let get_categories = 'https://arthentai.glitch.me/'+titles+'/categories';
      let get_episodes = 'https://arthentai.glitch.me/'+titles+'/episodes';
      let description = item.find('.hidden-content p').text().trim();
      
      
      itemList.push({
        title, views, likes, description, request_url, video_url, video_type, get_categories, get_episodes
      });
    }
    res.json(itemList);
  });
  
});


/////////////////////////////////////////////////////////////////////////////

/// this url will return the data our page needs
app.get('/search/:query', function(req, res) {
   
  // we're using the request library to get the HTML of the page.
  var query = req.params.query;
  request('https://arthentai.net/?post_type%5B%5D=post&s='+query, function (err, response, body) {
    
    if (err) {
      console.error(err);
      res.status(500);
      res.end('server error');
      return;
    }
    
    // cheerio.load takes a string of HTML and returns a jQuery-like interface
    let $ = cheerio.load(body);
    
    // Looking for all elements with a class
    let itemElements = $('.cactus-post-item');
    let itemList = [];
    
    for (let i = 0; i < itemElements.length; i++) {
      // .eq(n) gets the nth item from an element collection
      let item = itemElements.eq(i);

      // .find() searches within an element for the selector
      let cover = item.find('.entry-content .picture .picture-content a img').attr('src');
      let title = item.find('.entry-content .content h3 a').text().trim();
      let likes = item.find('.entry-content .picture .cactus-note').text().trim();
      let url = item.find('.entry-content .picture .picture-content a').attr('href');
    
      itemList.push({
        cover, title, likes, url
      });
    }
    res.json(itemList);
  });
  
});


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

app.get("/hentai/:manga_url", requestProxy({url: "https://arthentai.net/:manga_url",})
);

