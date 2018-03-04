export const InfiniteScroll = (sstep, iindex) =>  {
    const step = sstep;
    const index = iindex;
    const startItemIndex = (index*step - step),
        lateItemIndex = startItemIndex + step - 1,
        page = (index) || 2;
   
    console.log(page, startItemIndex, lateItemIndex);

    return {
        page,      // ---current page number
        startItemIndex,    // ---top item index
        lateItemIndex  }  // ---bottom item index 
}