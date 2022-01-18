import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import useTimeout from '../Hooks/useTimeout'

const DeginationData = ({ v }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [v])
    /// const { data } = useFetch(`http://localhost:3001/${page}`);
    const getData = () => {
        axios.get("https://manishsinghbhadouria.github.io/api/db.json").then((data) => {

            if (v === 'Regions') {
                setData(data.data[0].regions)

            } else if (v === 'Cities') {
                setData(data.data[0].cities)

            } else {
                setData(data.data[0].interests)

            }
        })
    }

    return (
        <div>

            {/* loading ? <div style={{ width: "50px", margin: "50px auto" }}><Loader /></div> : */}

            {data && <div style={{ marginTop: "-10px", display: "grid", gridGap: "20px", gridTemplateColumns: "auto auto auto auto" }}>
                {
                    data.map((el) => {
                        return <div key={el.name} style={{ marginBottom: "-33px", padding: "0" }}>
                            <p style={{ color: "#4A9AD4", marginBottom: "-12px", fontSize: "15px" }}>{el.name}</p>
                            <p style={{ color: "#A5A5A5",marginTop: 10, fontSize: "14px" }}>{el.properties}</p>
                        </div>
                    })
                }
            </div>

            }

        </div>
    )
}

export default DeginationData
