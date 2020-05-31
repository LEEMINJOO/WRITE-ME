import React from "react";
import usePagination from 'use-pagination'

const PostApp = () => {
    const pagination = usePagination({
      items: post_data,
      itemsPerPage: 3,
    });
   
    return (
        <div>
        <pre>
            { JSON.stringify(pagination, null, 3 )}
        </pre>
        <button onClick={pagination.onNextPage}>Next</button>
        <button onClick={pagination.onPreviousPage}>Back</button>
        <button onClick={pagination.onResetPage}>Reset</button>
        </div>
    )
    }

    export default PostApp;