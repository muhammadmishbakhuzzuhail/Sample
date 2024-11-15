import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const BarChartComponents = () => {
    const data = [
        {
            month: "Jan",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Feb",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Mar",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Apr",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "May",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Jun",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Jul",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Aug",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Sep",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Oct",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Nov",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
        {
            month: "Dec",
            product1: Math.floor(Math.random() * 1000) + 1,
            product2: Math.floor(Math.random() * 1000) + 1,
        },
    ];
    const CustomYAxisTick = (props) => {
        return (
            <text
                x={props.x}
                y={props.y}
                textAnchor="start"
                fill="#666"
                className="text-sm font-medium"
                dy="" // Tailwind class
                dx="-35"
            >
                {props.payload.value}
            </text>
        );
    };

    const CustomXAxisTick = (props) => {
        return (
            <text
                x={props.x}
                y={props.y}
                textAnchor="middle"
                fill="#666"
                className="text-sm font-medium"
                dx="" // Tailwind class
                dy="20"
            >
                {props.payload.value}
            </text>
        );
    };
    return (
        <ResponsiveContainer
            width="95%"
            height="88%"
            style={{ transform: "translateX(-1%)" }}
        >
            <BarChart
                data={data}
                width={100}
                height={100}
            >
                <YAxis tick={<CustomYAxisTick />} />
                <XAxis
                    dataKey="month"
                    tick={<CustomXAxisTick />}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CustomToolTip />} />
                <Legend
                    iconType="circle" // Bentuk kotak di legenda
                    iconSize={14} // Ukuran kotak
                    layout="horizontal" // Menampilkan legenda secara horizontal
                    align="center" // Menyelaraskan legenda di tengah
                    verticalAlign="bottom"
                    wrapperStyle={{
                        paddingTop: 10, // Jarak dari grafik
                        fontFamily: "Poppins, sans-serif", // Mengubah font untuk legenda
                        fontSize: "12px", // Ukuran font
                        color: "#333", // Warna font
                    }}
                />
                <Bar
                    dataKey="product1"
                    fill="#3b82f6"
                    name="Product 1"
                />
                <Bar
                    dataKey="product2"
                    fill="#8b5cf6"
                    name="Product 2"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="px-2 py-1 bg-blue-50 flex flex-col gap-1 rounded-md ">
                <p className="text-sm font-bold text-gray-800 text-center">
                    {label}
                </p>
                <div className="flex items-center space-x-2 text-xs">
                    <p className=" text-gray-600">Product 1:</p>
                    <span className="ml-2 font-semibold text-blue-400">
                        ${payload[0].value}
                    </span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                    <p className="text-gray-600">Product 1:</p>
                    <span className="ml-2 font-semibold  text-indigo-400">
                        ${payload[1].value}
                    </span>
                </div>
            </div>
        );
    }
    return null;
};

export default BarChartComponents;
