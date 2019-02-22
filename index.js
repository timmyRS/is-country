module.exports = async i => {
	let r = true;
	await require("apimon").country(i).catch(()=>{
		r = false;
	});
	return r;
};
