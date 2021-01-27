import React from 'react';
export const Datatable = ({data}) => {
    const columns = data[0] && Object.keys(data[0]);
    return(
    
        <table className="f-w white-box mr-3 purple">
            <thead>
                <tr>
                    { data[0] && columns.map((heading) => <th>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row)=> (
                        <tr>
                            {
                                columns.map((column) => (
                                <td>{row[column]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
           
        </table>
    )
}