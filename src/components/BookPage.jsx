import React from "react";

function BookPage() {
  return (
    <div className="">
      Bookpage
      <div className="flex mx-auto h-96 items-center justify-center">
        <iframe
          src="https://pdfobject.com/pdf/sample.pdf"
          width="80%"
          height="100%"
          title="PDF Viewer"
        />
      </div>
      <a href="https://pdfobject.com/pdf/sample.pdf" download>
        <button className="bg-red-700 p-4 rounded">Download PDF</button>
      </a>
    </div>
  );
}

export default BookPage;
