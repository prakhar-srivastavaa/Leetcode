/**
 * Encodes a URL to a shortened URL.
 */
 const map =new Map<number, string>();
 let id=0;
 const baseurl="http:tinyurl.com/";
function encode(longUrl: string): string {
	map.set(id,longUrl);
    return baseurl + (id).toString();
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	const sid = parseInt(shortUrl.replace(baseurl,""),10);
    return map.get(sid);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */