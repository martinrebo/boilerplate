import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import logo from '../../assets/logo.svg';
import '../../App.css';
import { toggleTest } from '../../store/actions/actionCreators';
import Header from '../../components/elements/Header/Header'
import { Grid } from '@material-ui/core';
import Footer from '../../components/elements/Footer/Footer';

/**
 * Check if MongoDB / Express / Redux is working properly
 */

export default function Checker(): ReactElement {
    const [data, setData] = useState();

    /**
     * Check express and MongoDB
     */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                '/api/test',
            );
            const expressCheck = await response.json()
            setData(expressCheck.data)
        };
        fetchData();
    }, []);


    const reduxTest = useSelector((state: State) => state.test, shallowEqual)

    const dispatch: Dispatch<any> = useDispatch();

    const handleRedux =
        useCallback(() => dispatch(toggleTest(reduxTest)), [dispatch, reduxTest])
    return (
        <>
            <Header />
            <Grid container direction="column" alignItems="center">

                <h1> Logged In successfully </h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Tech Usen on this project : </h2>

                <ul>
                    <li> React <span role="img" aria-label="green-check">✔️ </span> </li>
                    <li> Typescript <span role="img" aria-label="green-check">✔️ </span> </li>
                    <li> Docker  <span role="img" aria-label="green-check">✔️ </span> </li>
                    <li> MongoDB  <span role="img" aria-label="green-check">✔️ </span></li>
                    <li> {data} </li>
                    <li> Redux is working: {reduxTest.value ? "✔️ ON ⌛ " : " ✔️ OFF ⏳ "}
                        <button onClick={handleRedux}> Check </button> </li>

                </ul>
            </Grid>
            <Footer subtitle='Admin Panel Private' />
        </>
    )
}
