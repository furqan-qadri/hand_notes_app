import Navbar from "./components/Navbar.jsx";
import ResultTextBar from "./components/ResultTextBar.jsx";
import BookThumbnail from "./components/BookThumbail.jsx";
import BookPage from "./components/BookPage.jsx";
import books from "./components/booksdata.jsx"; // Import the books data
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="p-16 flex flex-col gap-6 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]
    "
    >
      <Navbar />
      <ResultTextBar heading="All books" />
      <div className="grid grid-cols-5 gap-8 w-full overflow-y-auto">
        {books.map(
          (book: { Title: any; Author: any; pdf_link: any }, index: any) => (
            <BookThumbnail
              key={index} // Unique key for each child
              title={book.Title}
              author={book.Author}
              link={book.pdf_link}
            />
          )
        )}
      </div>

      {/* <BookPage /> */}
    </div>
  );
}

export default App;

//with the search implemented

// import React, { useState } from "react";
// import Navbar from "./components/Navbar.jsx";
// import ResultTextBar from "./components/ResultTextBar.jsx";
// import BookThumbnail from "./components/BookThumbail.jsx";
// import books from "./components/booksdata.jsx"; // Import the books data

// function App() {
//   const [searchTerm, setSearchTerm] = useState(""); // State for the search term

//   // Filter books based on the search term
//   const filteredBooks = books.filter((book) =>
//     book.Title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div
//       className="p-16 flex flex-col gap-6 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
//     >
//       <Navbar />
//       <ResultTextBar heading="All books" />

//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search for books..."
//           className="w-full p-2 border rounded"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
//         />
//       </div>

//       {/* Filtered Books */}
//       <div className="grid grid-cols-5 gap-8 w-full overflow-y-auto">
//         {filteredBooks.length > 0 ? (
//           filteredBooks.map((book, index) => (
//             <BookThumbnail
//               key={index} // Unique key for each child
//               title={book.Title}
//               author={book.Author}
//               link={book.pdf_link}
//             />
//           ))
//         ) : (
//           <div className="col-span-5 text-center text-gray-500">
//             No books found.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
