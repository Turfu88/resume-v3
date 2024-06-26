import request from "./request";
import StoryblokClient from 'storyblok-js-client';

export const storyblokToken = "0MJOsuWP8MeovwzTOWHeqgtt";

export async function getPageContent(page) {
    const url = `https://api.storyblok.com/v2/cdn/stories/${page}?cv=1719230002&token=${storyblokToken}&version=published`;

    return await request(url, "GET", null, true).then((res) => {
        if (res.status === 200) {
            return res.json.story.content;
        }
        return null;
    })
}

export function renderHtmlContent(content) {
    const Storyblok = new StoryblokClient({ accessToken: storyblokToken });

    return Storyblok.richTextResolver.render(content);
}
