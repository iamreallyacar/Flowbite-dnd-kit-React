import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Badge } from 'flowbite-react'
import { ShowcaseCard, ShowcaseHeading, ShowcaseText, ShowcaseSectionHeader, ShowcaseLinkText } from "../../components"

export function TableSection() {
  return (
    <ShowcaseCard>
      <ShowcaseHeading>Production Data Tables</ShowcaseHeading>
      <ShowcaseText>
        Display production orders, machine status, and job progress in organized tables with status indicators.
      </ShowcaseText>
      
      <div className="space-y-8">
        {/* Production Orders Table */}
        <div>
          <ShowcaseSectionHeader>Active Production Orders</ShowcaseSectionHeader>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableHeadCell>Order Number</TableHeadCell>
                <TableHeadCell>Product</TableHeadCell>
                <TableHeadCell>Machine</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Progress</TableHeadCell>
                <TableHeadCell>Priority</TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Actions</span>
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    PO-2024-158
                  </TableCell>
                  <TableCell>Widget Assembly (1000 units)</TableCell>
                  <TableCell>Assembly Line A-101</TableCell>
                  <TableCell>
                    <Badge color="yellow">In Progress</Badge>
                  </TableCell>
                  <TableCell>850/1000 (85%)</TableCell>
                  <TableCell>
                    <Badge color="red">High</Badge>
                  </TableCell>                  <TableCell>
                    <ShowcaseLinkText href="#">
                      View
                    </ShowcaseLinkText>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    PO-2024-159
                  </TableCell>
                  <TableCell>Precision Gears (500 units)</TableCell>
                  <TableCell>CNC Machine B-205</TableCell>
                  <TableCell>
                    <Badge color="green">Completed</Badge>
                  </TableCell>
                  <TableCell>500/500 (100%)</TableCell>
                  <TableCell>
                    <Badge color="yellow">Medium</Badge>
                  </TableCell>                  <TableCell>
                    <ShowcaseLinkText href="#">
                      View
                    </ShowcaseLinkText>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    QC-24-890
                  </TableCell>
                  <TableCell>Quality Control Batch</TableCell>
                  <TableCell>Quality Station C-301</TableCell>
                  <TableCell>
                    <Badge color="blue">Scheduled</Badge>
                  </TableCell>
                  <TableCell>0/200 (0%)</TableCell>
                  <TableCell>
                    <Badge color="red">High</Badge>
                  </TableCell>
                  <TableCell>
                    <ShowcaseLinkText href="#">
                      View
                    </ShowcaseLinkText>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    PO-2024-160
                  </TableCell>
                  <TableCell>Motor Assembly (200 units)</TableCell>
                  <TableCell>Assembly Line D-401</TableCell>
                  <TableCell>
                    <Badge color="gray">On Hold</Badge>
                  </TableCell>
                  <TableCell>0/200 (0%)</TableCell>
                  <TableCell>
                    <Badge color="green">Low</Badge>
                  </TableCell>
                  <TableCell>
                    <ShowcaseLinkText href="#">
                      View
                    </ShowcaseLinkText>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Machine Status Table */}
        <div>
          <ShowcaseSectionHeader>Machine Status Overview</ShowcaseSectionHeader>
          <div className="overflow-x-auto">
            <Table striped>
              <TableHead>
                <TableHeadCell>Machine ID</TableHeadCell>
                <TableHeadCell>Machine Type</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Utilization</TableHeadCell>
                <TableHeadCell>Current Job</TableHeadCell>
                <TableHeadCell>Next Maintenance</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    A-101
                  </TableCell>
                  <TableCell>Assembly Line</TableCell>
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
        </div>        {/* Hoverable Table */}
        <div>
          <ShowcaseSectionHeader>Hoverable Table</ShowcaseSectionHeader>
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
