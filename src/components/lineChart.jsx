
import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

// import dados from './data/grafico.json';

export const GLinha = () => {
    const data = [
        { label: 'JAN', vendas: 120, despesas: 85 },
        { label: 'FEV', vendas: 150, despesas: 110 },
        { label: 'MAR', vendas: 180, despesas: 130 },
        { label: 'ABR', vendas: 140, despesas: 100 },
        { label: 'MAI', vendas: 220, despesas: 160 },
        { label: 'JUN', vendas: 200, despesas: 145 },
        { label: 'JUL', vendas: 250, despesas: 180 },
        { label: 'AGO', vendas: 280, despesas: 210 },
        { label: 'SET', vendas: 230, despesas: 190 },
        { label: 'OUT', vendas: 320, despesas: 240 },
        { label: 'NOV', vendas: 290, despesas: 220 },
        { label: 'DEZ', vendas: 350, despesas: 270 },
    ];
    return (
        <AreaChart
            style={{
                width: '100%',
                maxWidth: '700px',
                maxHeight: '70vh',
                aspectRatio: 1.618
            }}
            responsive
            data={data}
            margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0
            }}
        >
            <defs>
                <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>

                <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="label" />

            <YAxis width="auto" />

            <Tooltip />

            <Area
                type="monotone"
                dataKey="vendas"
                name="Vendas"
                stroke="#8884d8"
                activeDot={{ r: 6 }}
                fillOpacity={1}
                fill="url(#colorVendas)"
                isAnimationActive={true}
                animationBegin={200}
                animationDuration={1300}
            />

            <Area
                type="monotone"
                dataKey="despesas"
                name="Despesas"
                stroke="#82ca9d"
                activeDot={{ r: 6 }}
                fillOpacity={1}
                fill="url(#colorDespesas)"
                isAnimationActive={true}
            />

        </AreaChart>
    );
};