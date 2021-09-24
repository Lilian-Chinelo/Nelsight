import Head from "next/head";
import Excel from "exceljs";
import { useState } from "react";

const Service = () => {
  var workbook = new Excel.Workbook()
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  
  console.log('excel', Excel);

  const countRows = (excel_file) =>{
    console.log(excel_file)
    // workbook.xlsx.readFile(excel_file)
    // .then(function() {
    //     worksheet = workbook.getWorksheet("Sheet1")
    //     cell = worksheet.getCell('A1').value
    //     console.log(cell)
    // });
    // workbook.xlsx.readFile(excel_file)
    // .then(function (workbook) {
    //     console.log(workbook)
    //   })
  }



  return (
    <div className=" py-40 h-screen w-full">
      <Head>
        <title>NelSight</title>
      </Head>
      <input
        type="file"
        multiple
        accept=".xlsx,.xls"
        onChange={(e) => countRows(e.target.files[0])}
      />
      <h1 className="text-black">
        Rows: {rows}
        Columns: {columns}
      </h1>
    </div>
  );
};

export default Service;
