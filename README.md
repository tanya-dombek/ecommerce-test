## Run Locally

### Layout Approach:
The product page uses a column layout where the product image and details are side-by-side on larger screens. Components are broken down into reusable units like ProductCard and VariantsDropdown to promote maintainability and code reuse.

### Responsiveness Considerations:
The layout adapts for smaller screens by stacking the columns vertically using Bootstrap’s grid system (col-md-6 and col-sm-12). Additionally, certain UI elements like the similar products carousel are hidden on small devices to optimize usability and performance.

Clone the project

```bash
  git clone https://github.com/tanya-dombek/ecommerce-test.git
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```
