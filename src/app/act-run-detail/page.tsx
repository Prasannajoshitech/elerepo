import DisplayPdf from '@/components/PdfViewer'
import React from 'react'
import Header from './partials/Header'

const page = () => {
   return (
      <div>
         <Header />

         <DisplayPdf path='/sample.pdf' />
      </div>
   )
}

export default page