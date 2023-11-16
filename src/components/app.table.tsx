'use client'
import { Table, Button } from "react-bootstrap";
import style from "@/styles/table.module.css";

interface IAppTableProps {
    products: IProducts[];
}

export default function AppTable(props: IAppTableProps) {
    const { products } = props;
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>Price</th>
                        <th>Img</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td><img className={style['pdt-img']} src={product.image}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
} 