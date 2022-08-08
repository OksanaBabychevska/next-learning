import Link from "next/link";
import { MainLayout } from "../components/main-layout";
import classes from '../styles/error.module.css'

export default function ErorrPage(){
 return(
    <MainLayout>
    <h1 className={classes.error}>Erorr 404</h1>
    <p>Please <Link href={'/'}><a>go back</a></Link> to safety</p>
    </MainLayout>
 )
}