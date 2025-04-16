import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type Props = {
  data: { time: string; temperature: number; humidity: number }[];
};

export const SensorChart = ({ data }: Props) => (
  <ResponsiveContainer width='100%' height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='temperature'
        stroke='#f97316'
        name='Temp (°C)'
        dot={false}
      />
      <Line
        dot={false}
        type='monotone'
        dataKey='humidity'
        stroke='#3b82f6'
        name='Humidity (%)'
      />
    </LineChart>
  </ResponsiveContainer>
);
