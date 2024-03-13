"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Data = [
  {
    id: 1,
    numberId: "#3456_768",
    Date: "October 17, 2023",
    Status: "Delivered",
    Price: "$1234.00",
  },
  {
    id: 2,
    numberId: "#3456_980",
    Date: "October 11, 2023",
    Status: "Delivered",
    Price: "$345.00",
  },
  {
    id: 3,
    numberId: "#3456_120",
    Date: "August 24, 2023",
    Status: "Delivered",
    Price: "$2345.00",
  },
  {
    id: 4,
    numberId: "#3456_030",
    Date: "August 12, 2023",
    Status: "Delivered",
    Price: "$845.00",
  },
];

const TableDemo = () => {
  return (
    <main className="w-full">
      <section className="mb-[40px]">
        <h1 className="text-[18px] leading-[28px] table:text-[20px] table:leading-[32px] font-semibold table:ml-4">
          Orders History
        </h1>
      </section>
      <section className="hidden table:block mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Number ID</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Data.map((item, index) => (
              <TableRow
                key={index}
                className="font-medium text-[14px] leading-[22px]"
              >
                <TableCell >{item.numberId}</TableCell>
                <TableCell>{item.Date}</TableCell>
                <TableCell>{item.Status}</TableCell>
                <TableCell>{item.Price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className="w-full table:hidden">
        <div className="w-full divide-y">
          {Data.map((item, index) => (
            <div key={index} className="py-[16px]">
              <div className="flex w-full">
                <h1 className="w-1/2 text-[14px] leading-[22px] font-medium text-[rgb(108,114,117)]">
                  Number ID
                </h1>
                <h1 className="w-1/2 text-left text-[14px] leading-[22px] font-medium text-[rgb(20,23,24)]">
                  {item.numberId}
                </h1>
              </div>
              <div className="flex w-full">
                <h1 className="w-1/2 text-[14px] leading-[22px] font-medium text-[rgb(108,114,117)]">
                  Dates
                </h1>
                <h1 className="w-1/ text-left text-[14px] leading-[22px] font-medium text-[rgb(20,23,24)]">
                  {item.Date}
                </h1>
              </div>
              <div className="flex w-full">
                <h1 className="w-1/2 text-[14px] leading-[22px] font-medium text-[rgb(108,114,117)]">
                  Status
                </h1>
                <h1 className="w-1/ text-left text-[14px] leading-[22px] font-medium text-[rgb(20,23,24)]">
                  {item.Status}
                </h1>
              </div>
              <div className="flex w-full">
                <h1 className="w-1/2 text-[14px] leading-[22px] font-medium text-[rgb(108,114,117)]">
                  Price
                </h1>
                <h1 className="w-1/ text-left text-[14px] leading-[22px] font-medium text-[rgb(20,23,24)]">
                  {item.Price}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TableDemo;
