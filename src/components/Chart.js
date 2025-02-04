import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useFetchCryptoData from "../hooks/useFetchCryptoData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,//i added responsive true but why its not so responsive?
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Cryptocurrency Market Overview",
    },
  },
};

const Chart = () => {
  const { cryptoData: globalData, loading } = useFetchCryptoData('global');

  if (loading) {
    return <strong>Loading...</strong>;
  }

  const data = {
    labels: ["Market Cap (USD)", "24h Volume (USD)", "BTC Dominance (%)", "Number of Cryptocurrencies"],
    datasets: [
      {
        label: "Market Data",
        data: [
          globalData.market_cap_usd / 1e9, // Convert to billions
          globalData.volume_24h_usd / 1e9, // Convert to billions
          globalData.bitcoin_dominance_percentage,
          globalData.cryptocurrencies_number
        ],
        backgroundColor: [
          'rgba(248, 61, 101, 0.5)',
          'rgba(37, 159, 240, 0.5)',
          'rgba(249, 195, 58, 0.5)',
          'rgba(48, 189, 189, 0.5)',
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Cryptocurrency Market Overview</h1>
      <div style={{ width: 600, height: 300 }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;