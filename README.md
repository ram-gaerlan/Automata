# Automata Project

A web-based visualization tool for Finite Automata, Pushdown Automata, and Context-Free Grammars. This project provides an interactive interface to explore and understand different types of automata and their corresponding regular expressions.

## Features

- **DFA Visualization**: Interactive visualization of Deterministic Finite Automata
- **PDA Visualization**: Visual representation of Pushdown Automata with zoom and pan capabilities
- **CFG Display**: Clear presentation of Context-Free Grammar productions
- **Regular Expression Display**: View and compare different regular expressions
- **String Validation**: Test strings against the automata
- **Dark Theme**: Modern dark theme interface for better visibility
- **Responsive Design**: Works on both desktop and mobile devices

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- D3.js (for graph visualization)
- React Router
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/automata-project.git
cd automata-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── assets/         # Static assets like images
├── components/     # React components
├── contexts/       # React contexts
├── data/          # Data files
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by theoretical computer science and automata theory 