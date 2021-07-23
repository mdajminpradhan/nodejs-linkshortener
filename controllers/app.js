const ShortUrl = require('../models/app');

// render homepage
exports.homepage = async (req, res) => {
	const shortUrls = await ShortUrl.find();
	res.render('index', { shortUrls: shortUrls });
};

// short url
exports.shortUrl = async (req, res) => {
	await ShortUrl.create({ full: req.body.fullUrl });

	res.redirect('/');
};

// redirect user
exports.redirectUser = async (req, res) => {
	const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });

	console.log(req.params)

	if(shortUrl == null){
		return res.sendStatus(404)
	}

	shortUrl.click++;
	shortUrl.save();

	res.redirect(shortUrl.full);
};
