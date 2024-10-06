import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { articleitem } from './Api';
// Example items, to simulate fetching from another resources.
import styles from './pagnigationM.module.scss'
import './stylepage.scss'

function Items({ currentItems }) {
    return (
        <div className={styles.Movies}>
            {currentItems.map((item) => {
                return (
                    <div className={styles.EachMovie}>
                        <div className={styles.imgContent}>
                            <img src={item.img} />
                        </div>
                        <div className={styles.content}>
                            <h2>Angry birds</h2>
                            <h2>Duration: {item.Duration}</h2>
                            <div className={styles.smallContent}>
                                <p>Actor: </p>
                                <p>
                                    Genre: &nbsp;&nbsp; <a>{item.genre}</a>
                                </p>
                                <p>
                                    Release: &nbsp;&nbsp;<a>12</a>
                                </p>
                                <p>
                                    Language: &nbsp;&nbsp;<a>{item.Language}</a>
                                </p>
                                <p>
                                    Genre: &nbsp;&nbsp;<a>{item.genre}</a>
                                </p>
                                <h3>Showtime</h3>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = articleitem.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(articleitem.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % articleitem.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <div className={styles.pagnigation}>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
                containerClassName="react-paginate"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="selected"
                disabledClassName="disabled"
            />
        </div>
    );
}

// Add a <div id="container"> to your HTML to see the component rendered.
export default PaginatedItems;
