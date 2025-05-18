<div align="center">

<h1 align="center">StockRocket</h3>
</div>

StockRocket is a multiplayer stock trading simulator that lets users practice trading stocks, currencies, and cryptocurrencies using virtual money in real-time. Designed for beginners and students, the app uses real-time live US market data to simulate realistic trading scenarios. Users can manage portfolios, track performance, and compete in timed competitions via a secure, responsive platform. Features include user dashboards, leaderboards,—all aimed at making trading education fun, safe, and engaging!

## Features ✨

- 🪙 Real-time virtual trading of stocks, currencies, and cryptocurrencies
- 🌐 Multiplayer leaderboard for competitive trading with friends
- 📊 Interactive charts and visualizations for better decision-making
- 🗞️ Access to financial news for informed trading
- 🎨 Beautiful design with dark mode and customizable accent color
- 📱 Responsive design for trading on-the-go

## Architecture 🏗️

StockRocket uses a microservices architecture, with separate services for the frontend and backend. The two services are stored in separate directories within this monorepo and are meant to be run simultaneously on different ports of the host. The frontend is built with React which interfaces with the Node.js/Express backend over a Restful API. The backend sends to and reads from the MongoDB database (run on MongoDB Atlas as of now).

