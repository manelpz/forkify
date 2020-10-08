import {elements} from './base';

export const toggleLikeBtn = isLiked => {

    const iconString = ikLiked ? 'icon-heart' : 'icon-heart-utline';
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
    
};