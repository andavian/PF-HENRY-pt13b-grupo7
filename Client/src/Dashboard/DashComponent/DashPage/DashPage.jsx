import React, { useEffect, useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getClients } from "../../../redux/actions";
import { Bar, Pie ,PolarArea } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import styles from './DashPage.module.css';

export default function DashPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.catalog);
  const clients = useSelector((state) => state.reducer.clients);
  const [productData, setProductData] = useState({ baratos: 0, intermedios: 0, caros: 0 });
  const [categoryData, setCategoryData] = useState({});
  const bannedClientsCount = clients.filter((client) => client.banned).length;
  const activeClientsCount = clients.length - bannedClientsCount;
  // Registra la escala "category" en Chart.js
  CategoryScale.id = 'category';
  CategoryScale.defaults = {};

  // Registra la escala en Chart.js
  Chart.register(CategoryScale);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      console.log('Fetching product data...');
      dispatch(addProduct());
      dispatch(getClients())
      setDataFetched(true);
    }
    
    const priceRanges = categorizarProductosPorPrecio(products);
    console.log('Price Ranges:', priceRanges);
    setProductData(priceRanges);
    const categoryCounts = contarProductosPorCategoria(products);
    console.log('Category Counts:', categoryCounts);
    setCategoryData(categoryCounts);
  }, [dispatch, dataFetched]);

  const contarProductosPorCategoria = (productos) => {
    const categorias = {};

    // Itera a través de los productos y cuenta la cantidad en cada categoría
    productos.forEach((producto) => {
      const categoria = producto.Category.name;

      if (categorias[categoria]) {
        categorias[categoria]++;
      } else {
        categorias[categoria] = 1;
      }
    });

    return categorias;
  };

  const categorizarProductosPorPrecio = (productos) => {
    const categorias = {
      baratos: 0,
      intermedios: 0,
      caros: 0,
    };

    // Itera a través de los productos y clasifícalos en las categorías
    productos.forEach((producto) => {
      const precio = producto.price;

      if (precio >= 0 && precio <= 10) {
        categorias.baratos++;
      } else if (precio > 10 && precio <= 15) {
        categorias.intermedios++;
      } else {
        categorias.caros++;
      }
    });

    return categorias;
  };
  const clientStatusData = {
    labels: ['Baneados', 'Activos'],
    datasets: [
      {
        label: 'Clientes por Estado',
        data: [bannedClientsCount, activeClientsCount],
        backgroundColor: [
          'rgba(245, 74, 85, 0.6)', // Rojo para clientes baneados
          'rgba(29, 196, 193, 0.6)', // Verde para clientes activos
        ],
        borderColor: [
          'rgba(245, 74, 85, 1)',
          'rgba(29, 196, 193, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
  // Configura los datos para el nuevo gráfico de categorías
  const categoryChartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: 'Cantidad de Productos por Categoría',
        data: Object.values(categoryData),
        backgroundColor: [
          'rgba(29, 196, 193, 0.6)',
          'rgba(245, 74, 85, 0.6)',
          'rgba(91, 112, 222, 0.6)',
        ],
        borderColor: [
          'rgba(29, 196, 193, 1)',
          'rgba(245, 74, 85, 1)',
          'rgba(91, 112, 222, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

 

  const chartData = {
    labels: ['Baratos (0-10)', 'Intermedios (10-15)', 'Caros (15+)'],
    datasets: [
      {
        label: 'Accesibilidad en precios',
        data: Object.values(productData),
        backgroundColor: [
          'rgba(29, 196, 193, 0.6)',
          'rgba(245, 74, 85, 0.6)',
          'rgba(91, 112, 222, 0.6)',
        ],
        borderColor: [
          'rgba(29, 196, 193, 1)',
          'rgba(245, 74, 85, 1)',
          'rgba(91, 112, 222, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options1 = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  
  const options2 = {
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1 className={styles.title}>Dashboard Henry Fans</h1>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          {productData ? (
            <Bar data={chartData} options={options1} />
          ) : (
            <p>Cargando datos...</p>
          )}
        </div>
        <div className={styles.chart}>
          {categoryData && Object.keys(categoryData).length > 0 ? (
            <PolarArea data={categoryChartData} options={options2} />
          ) : (
            <p>No hay datos de categorías disponibles.</p>
          )}
        </div>
        <div className={styles.chart}>
          <div>
            <h2>Clientes</h2>
            <Bar data={clientStatusData} />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="busqueda">
          <FcSearch />
        </label>
        <input  className={styles.input}
        
        name="busqueda" type="text" placeholder="Buscar..." />
      </div>
      <div>
        <select name="categoryName">
          <option>Selecciona una categoría</option>
          <option value="electronics">Electronicos</option>
          <option value="jewelery">Joyería</option>
          <option value="women's clothing">Ropa de Mujer</option>
          <option value="men's clothing">Ropa de Hombre</option>
        </select>
      </div>
    </div>
  );
}





