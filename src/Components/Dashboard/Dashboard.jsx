import React from 'react'
import Book from '../BookDashboard/Book'
import Header from '../Header/Header'
import { getBook } from '../../Services/dataService'
import BookDetails from '../BookDetails/BookDetails'
import Pagination from '@mui/material/Pagination';
import './Dashboard.css'
import usePagination from '../Pagination/Pagination'


function Dashboard() {

    const [bookArr, setBookArr] = React.useState([])
    console.log("bookArr", bookArr)

    const [page, setPage] = React.useState(1)

    // for getting book 
    const [books, setBooks] = React.useState([])
    console.log("books", books)

    //for bookdetails
    const [bookdetails, setbookdetails] = React.useState(true)
    console.log("bookdetails", bookdetails)

    //store bookdetails to send to bookdetails.jsx
    const [bookdata, setBookData] = React.useState(true)
    console.log("bookdata", bookdata)




    // to send book data to bookdetails
    const listenToBook = (data) => {
        console.log("data", data)
        setBookData(data)
        setbookdetails(false)
    }

    const getBooks = () => {

        getBook()
            .then((res) => {
                setBookArr(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log("books", books)

    React.useEffect(() => {
        getBook()
            .then(response => {
                console.log(response.data.data)
                setBooks(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    React.useEffect(() => {
        getBooks()
    }, [])

    const Per_Page = 8;

    var bookArrLength = bookArr ? bookArr.length : 0
    const pageCount = Math.ceil(bookArrLength / Per_Page)
    const paginate = usePagination(bookArr, Per_Page)

    const changePage = (event, page) => {
        console.log("event", event)
        setPage(page)
        paginate.jump(page)
        paginate.next()
        paginate.previous()
    }

    return (

        <div>

            <Header />

            <div >

                {/* {books.map((book) => (
                    <Book book={book} />
                ))
                } */}


                {/* conditional rendering while click on one of the book then we go to that book details */}
                {
                    bookdetails ? books.map((book) => (
                        <Book book={book} listenToBook={listenToBook} />
                    ))

                        : <BookDetails bookdata={bookdata} />
                }




            </div>
            <div className='pagination' id='page'>
                <Pagination onChange={changePage} page={page} count={pageCount} />
            </div>
        </div>

    )
}


export default Dashboard
