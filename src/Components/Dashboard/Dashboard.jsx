import React from 'react'
import Book from '../BookDashboard/Book'
import Header from '../Header/Header'
import { getBook } from '../../Services/dataService'
import BookDetails from '../BookDetails/BookDetails'

function Dashboard() {

   
    // for getting book 
    const [books, setBooks] = React.useState([])
    console.log("books", books)

    //for bookdetails
    const [bookdetails, setbookdetails] = React.useState(true)
    console.log("bookdetails", bookdetails)

    //store bookdetails to send to bookdetails.jsx
    const [bookdata, setBookData] = React.useState(true)
console.log("bookdata" , bookdata)


    //cart
    
   
    // to send book data to bookdetails
    const listenToBook = (data) => {
        console.log("data", data)
        setBookData(data)
        setbookdetails(false)
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
            
        </div>

    )
}


export default Dashboard
