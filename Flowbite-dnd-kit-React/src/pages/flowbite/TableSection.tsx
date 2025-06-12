import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading } from "../../components"

export function TableSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Table</ShowcaseHeading>
      <p className="text-gray-600 mb-6">
        Display data in rows and columns with customizable table components.
      </p>
      
      <div className="space-y-8">
        {/* Default Table */}
        <div>
          <h3 className="text-lg font-medium mb-4">Default Table</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableHeadCell>Product name</TableHeadCell>
                <TableHeadCell>Color</TableHeadCell>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Edit</span>
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </TableCell>
                  <TableCell>White</TableCell>
                  <TableCell>Laptop PC</TableCell>
                  <TableCell>$1999</TableCell>
                  <TableCell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                  <TableCell>Black</TableCell>
                  <TableCell>Accessories</TableCell>
                  <TableCell>$99</TableCell>
                  <TableCell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Striped Table */}
        <div>
          <h3 className="text-lg font-medium mb-4">Striped Table</h3>
          <div className="overflow-x-auto">
            <Table striped>
              <TableHead>
                <TableHeadCell>Product name</TableHeadCell>
                <TableHeadCell>Color</TableHeadCell>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </TableCell>
                  <TableCell>White</TableCell>
                  <TableCell>Laptop PC</TableCell>
                  <TableCell>$1999</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                  <TableCell>Black</TableCell>
                  <TableCell>Accessories</TableCell>
                  <TableCell>$99</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Hoverable Table */}
        <div>
          <h3 className="text-lg font-medium mb-4">Hoverable Table</h3>
          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>Product name</TableHeadCell>
                <TableHeadCell>Color</TableHeadCell>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Silver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </TableCell>
                  <TableCell>White</TableCell>
                  <TableCell>Laptop PC</TableCell>
                  <TableCell>$1999</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
