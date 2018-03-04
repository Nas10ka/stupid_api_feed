export const HANDLE_SCROLL = 'HANDLE_SCROLL';

export const handleScroll = (currentPage) => ({
    type: 'HANDLE_SCROLL',
    // index: currentPage
    payload : {
        index: currentPage
    }
    
});