// Desarrollo de anális tienda a cerrar
// Importando los datos

import pandas as pd

url = "https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_1%20.csv"
url2 = "https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_2.csv"
url3 = "https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_3.csv"
url4 = "https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_4.csv"

tienda = pd.read_csv(url)
tienda2 = pd.read_csv(url2)
tienda3 = pd.read_csv(url3)
tienda4 = pd.read_csv(url4)

tienda.head()

#  1. Análisis de facturación
## En este primer análisis, debes calcular el ingreso total de cada tienda. Sumando los valores de la columna Precio de cada conjunto de datos de la tienda para estimar los ingresos.

tienda.Precio.sum()
print(f'Ingreso_tienda:  ${tienda.Precio.sum():,.2f}')
tienda2.Precio.sum()
print(f'Ingreso_tienda 2:${tienda2.Precio.sum():,.2f}')
tienda3.Precio.sum()
print(f'Ingreso_tienda 3:${tienda3.Precio.sum():,.2f}')
tienda4.Precio.sum()
print(f'Ingreso_tienda 4:${tienda4.Precio.sum():,.2f}')

// Ingreso_tienda:  $1,150,880,400.00
//Ingreso_tienda 2:$1,116,343,500.00
//Ingreso_tienda 3:$1,098,019,600.00
//Ingreso_tienda 4:$1,038,375,700.00

###### Con nuestro primer análisis, vemos que la tienda 4 es la que tiene menos ingresos, lo que la convierte en foco para observar si es la que debe cerrar.

##  También vemos en otro análisis, que la diferencia de ingresos vs la tienda 1 "que es la que más ventas reporta" es considerable, por lo que es otro punto a observar para determinar el cierre o no de la tienda.

dif_ing=(tienda.Precio.sum() - tienda4.Precio.sum())
print(f'Diferencia de ingresos de tienda1 y tienda4: ${dif_ing:,.2f}')

//Diferencia de ingresos de tienda1 y tienda4: $112,504,700.00

# 2. Ventas por categoría

##Calcular:
 //* la cantidad de productos vendidos por categoría en cada tienda.
 //* La idea es agrupar los datos por categoría y
 //* contar el número de ventas de cada tipo,
 //* mostrando las categorías más populares de cada tienda.

print(f'Categorías más populares en Tienda 1:')
tienda['Categoría del Producto'].value_counts()
print(f'Categorías más populares en Tienda 2:')
tienda2['Categoría del Producto'].value_counts()
print(f'Categorías más populares en Tienda 3:')
tienda3['Categoría del Producto'].value_counts()
print(f'Categorías más populares en Tienda 4:')
tienda4['Categoría del Producto'].value_counts()

## Gráficas de barras para visualizar las ventas por categoría

import matplotlib.pyplot as plt
import seaborn as sns

# Ventas por categoría para Tienda 1
plt.figure(figsize=(12, 6))
cat_tienda1.plot(kind='bar', color='purple')
plt.title('Ventas por Categoría en Tienda 1')
plt.xlabel('Categoría del Producto')
plt.ylabel('Cantidad de Ventas')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()

# Ventas por categoría para Tienda 2
plt.figure(figsize=(12, 6))
cat_tienda2.plot(kind='bar', color='pink')
plt.title('Ventas por Categoría en Tienda 2')
plt.xlabel('Categoría del Producto')
plt.ylabel('Cantidad de Ventas')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()

# Ventas por categoría para Tienda 3
plt.figure(figsize=(12, 6))
cat_tienda3.plot(kind='bar', color='green')
plt.title('Ventas por Categoría en Tienda 3')
plt.xlabel('Categoría del Producto')
plt.ylabel('Cantidad de Ventas')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()

# Ventas por categoría para Tienda 4
plt.figure(figsize=(12, 6))
cat_tienda4.plot(kind='bar', color='grey')
plt.title('Ventas por Categoría en Tienda 4')
plt.xlabel('Categoría del Producto')
plt.ylabel('Cantidad de Ventas')
plt.xticks(rotation=45, ha='right')
plt.tight_layout()
plt.show()


# 3. Calificación promedio de la tienda

print(f'Calificación promedio de Tienda 1: {tienda.Calificación.mean():.2f}')
print(f'Calificación promedio de Tienda 2: {tienda2.Calificación.mean():.2f}')
print(f'Calificación promedio de Tienda 3: {tienda3.Calificación.mean():.2f}')
print(f'Calificación promedio de Tienda 4: {tienda4.Calificación.mean():.2f}')

//Calificación promedio de Tienda 1: 3.98
//Calificación promedio de Tienda 2: 4.04
//Calificación promedio de Tienda 3: 4.05
//Calificación promedio de Tienda 4: 4.00

# 4. Productos más y menos vendidos

print(' +++  Productos más y menos vendidos en Tienda 1 +++ ')
print(f' *** Lista de 5 productos más vendidos: ***')
print(tienda['Producto'].value_counts().head(5))
print(f'*** Lista de 5 productos menos vendidos: ***')
print(tienda['Producto'].value_counts().tail(5))

print('+++  Productos más y menos vendidos en Tienda 2 +++ ')
print(f' *** Lista de 5 productos más vendidos: ***')
print(tienda2['Producto'].value_counts().head(5))
print(f'*** Lista de 5 productos menos vendidos: ***')
print(tienda2['Producto'].value_counts().tail(5))

print(f'+++ Productos más y menos vendidos en Tienda 3 +++ ')
print(f'*** Lista de 5 productos más vendidos:***')
print(tienda3['Producto'].value_counts().head(5))
print(f'*** Lista de 5 productos menos vendidos: ***')
print(tienda3['Producto'].value_counts().tail(5))

print(f'+++ Productos más y menos vendidos en Tienda 4 +++')
print(f'*** Lista de 5 productos más vendidos:***')
print(tienda4['Producto'].value_counts().head(5))
print(f'*** Lista de 5 productos menos vendidos: ***')
print(tienda4['Producto'].value_counts().tail(5))

# 5. Envío promedio por tienda

print(f'Envío promedio de Tienda 1: {tienda["Costo de envío"].mean():,.2f}')
print(f'Envío promedio de Tienda 2: {tienda2["Costo de envío"].mean():,.2f}')
print(f'Envío promedio de Tienda 3: {tienda3["Costo de envío"].mean():,.2f}')
print(f'Envío promedio de Tienda 4: {tienda4["Costo de envío"].mean():,.2f}')

//Envío promedio de Tienda 1: 26,018.61
//Envío promedio de Tienda 2: 25,216.24
//Envío promedio de Tienda 3: 24,805.68
//Envío promedio de Tienda 4: 23,459.46

import matplotlib.pyplot as plt

# Gráfica de Pie para 'Categoría del Producto' (en base a artículos) para Tienda 4
category_counts_tienda4 = tienda['Categoría del Producto'].value_counts()
plt.figure(figsize=(8, 6))
plt.pie(category_counts_tienda4, labels=category_counts_tienda4.index, autopct='%1.1f%%', startangle=90, wedgeprops={'edgecolor': 'black'})
plt.title('Distribución de Ventas por Categoría de Producto (Tienda 4)')
plt.axis('equal')
plt.show()

# Gráfica de Pie para 'Cantidad de Ventas' (ingresos totales por categoría) para Tienda 4
category_revenue_tienda4 = tienda.groupby('Categoría del Producto')['Precio'].sum()
plt.figure(figsize=(8, 6))
plt.pie(category_revenue_tienda4, labels=category_revenue_tienda4.index, autopct='%1.1f%%', startangle=90, wedgeprops={'edgecolor': 'black'})
plt.title('Distribución de Ingresos por Categoría de Producto (Tienda 4)')
plt.axis('equal')
plt.show()

## Informe final en el README


