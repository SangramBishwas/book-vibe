import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/localStorage";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const PagesToRead = () => {
    const books = useLoaderData()
    const [readedBooks, setReadedBooks] = useState([])
    useEffect(() => {
        const storedReadBookId = getStoredReadBook();
        const readBook = [];
        for (const id of storedReadBookId) {
            const book = books.find((item) => item.id === id)
            readBook.push(book)
        }
        const bookData = readBook.map((item) => {
            const data = {
                name: item.name,
                totalPage: item.totalPages
            }
            return data;

        })
        console.log(bookData)
        setReadedBooks(bookData)
    }, [])
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
      
      const TriangleBar = (props) => {
        const {
          // eslint-disable-next-line react/prop-types
          fill, x, y, width, height,
        } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (
        <div className="my-16 ">
            <div>
                <h2>Pages to read</h2>
            </div>
            <div className="flex justify-center">
                <BarChart width={1200} height={500} data={readedBooks}>
                    <Bar dataKey="totalPage" fill="#8884d8" shape={<TriangleBar />}/>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>


        </div>
    );
};

export default PagesToRead;