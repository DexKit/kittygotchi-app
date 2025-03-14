# Kittygotchi App

![DexKit Logo](https://dexkit.com/branding/Outline_logo/Outline_Imagotype/Outline_black_Imago_DexKit.png)
![DexKit Logo w](https://dexkit.com/branding/Outline_logo/Outline_Imagotype/Outline_white_Imago_DexKit.png)


A modern, feature-rich cryptocurrency wallet built on Next.js, designed to support multiple blockchain networks with an intuitive user interface.

## Features

- Multi-wallet Support: Connect with MetaMask or use email-based authentication via Magic
- Multi-network: Manage assets across Ethereum, Polygon, Binance Smart Chain, Optimism, and more

### Asset Management

- View and manage ERC-20/BEP-20 tokens
- Customizable display of balances
- Track portfolio value in multiple currencies

### NFT Support

- Browse your NFTs across multiple networks
- Dedicated Kittygotchi NFT system with unique features
- Transfer NFTs between wallets

### Transaction Management

- Send and receive crypto with QR code generation
- Token swapping capabilities
- Transaction history tracking

### User Experience

- Dark mode interface
- Responsive design for mobile and desktop
- Internationalization support (English, Spanish, Portuguese)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

- Clone the repository:
``git clone https://github.com/DexKit/kittygotchi-app.git``

- Install dependencies:
``npm install`` or ``yarn install``

- Create a .env.local file in the root directory with your API keys:
``MARKETPLACE_API_KEY=your_api_dexkit_key``

``MAGIC_API_KEY=your_magic_api_key``

``ALCHEMY_API_KEY=your_alchemy_api_key``

``DEXKIT_BASE_API_URL=https://dexkit-main-api-9vzhs.ondigitalocean.app``

Or use the .env.example file as a template.

- Start the development server:
``npm run dev`` or ``yarn dev``

Open http://localhost:3000 in your browser to see the application.

### Project Structure

The project follows a modular architecture:
- Technology Stack
 -Framework: Next.js with TypeScript
 -UI Library: Material UI (MUI)
- State Management:
 -Jotai for global state
 -React Query for data fetching
- Web3 Integration:
 -ethers.js for blockchain interaction
 -Web3React for wallet connectors
- Styling: Emotion (CSS-in-JS)
 -Internationalization: React-intl

### Development

#### Adding a New Network

To add support for a new blockchain network, update the network configuration in:
/src/modules/common/constants/networks.ts

#### Adding New Tokens

Custom tokens can be added in:
/src/modules/wallet/constants/tokens.ts

#### Building for Production

``npm run build`` or ``yarn build``

### Contributing

We welcome contributions! Please follow these steps:

- Fork the repository
- Create your feature branch
``git checkout -b feature/dis-feature``

- Commit your changes (git commit -m 'Add a great feature')
- Push to the branch (git push origin feature/dis-feature)
- Open a Pull Request
Please ensure your code follows the project's style guidelines and includes appropriate tests.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

- DexKit API for NFT and token data
- 0x Protocol for swap functionality
- Magic for email-based wallet authentication

---
Built with 💖 by the DexKit team
