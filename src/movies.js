export const getSmashystreamUrl = (tmdbID) =>{
    return `https://embed.smashystream.com/playere.php?tmdb=${tmdbID}`
}
export const getSuperembedUrl = (tmdbID) =>{
    return `https://multiembed.mov/directstream.php?video_id=${tmdbID}&tmdb=1`
}
export const get2embedUrl = (tmdbID) =>{
    return `https://www.2embed.cc/embed/${tmdbID}`
}