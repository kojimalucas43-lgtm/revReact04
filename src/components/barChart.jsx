
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const GBarra = () => {

 const data =[
        {label:'JAN', Metas:100, Atingidos:80},
        {label:'FEV', Metas:120, Atingidos:100},
        {label:'MAR', Metas:90, Atingidos:90},
        {label:'ABR', Metas:150, Atingidos:110},
        {label:'MAI', Metas:160, Atingidos:100},
        {label:'JUN', Metas:130, Atingidos:120},
        {label:'JUL', Metas:140, Atingidos:150},
        {label:'AGO', Metas:170, Atingidos:160},
        {label:'SET', Metas:190, Atingidos:190},
        {label:'OUT', Metas:200, Atingidos:200},
        {label:'NOV', Metas:100, Atingidos:90},
        {label:'DEZ', Metas:120, Atingidos:50},
    ]

    return(
         <BarChart
            style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
            >
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar fill='orange' dataKey="Metas" radius={[10, 10, 0, 0]} />
            <Bar fill='blue' dataKey="Atingidos" radius={[10, 10, 0, 0]} />
        </BarChart>
    )
}