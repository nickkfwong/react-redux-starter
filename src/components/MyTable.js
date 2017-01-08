import React from 'react';
import { TextField } from 'material-ui';

const ModelHeader = ({ model }) => (
    <tr>
        {
            model.map((col, index) => 
                <th key={index}>{col.name}</th>
            )
        }
    </tr>
)

const ModelRow = ({ model, row, rowId }) => (
    <tr key={rowId}>
        {
            model.map((col, colIdx) => 
                <td key={colIdx}>
                    <TextField key={`${rowId}_${colIdx}`} name={`${col.name}_${rowId}_${colIdx}`} defaultValue={row.trade[col.name]}/>
                </td>
            )
        }
    </tr>
)

class MyTable extends React.Component{
    render(){
        const { model, data } = this.props;
        return(
            <table>
                <tbody>
                    <ModelHeader model={model} />
                    {
                        data.map((row, rowIdx) => 
                            <ModelRow key={rowIdx} model={model} row={row} rowId={rowIdx}/>
                        )
                    }
                </tbody>    
            </table>
        )
    }
}

export default MyTable;