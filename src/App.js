import React from 'react' 
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Nav from './components/Nav.js'
import './App.css';
import Blog from './components/Blog'
import Home from './pages/Home'

const cookingPosts = {
  title: "Cooking",
  route : "cooking",
  posts : { 
    1 : {
        id: 1,
        title : "Millionaire Shortbread",
        date: "December 14 2021",
        categories: ["desert"],
        mainImage : "./recipe_photos/Millionaires-shortbread.jpeg",
        options: {

        },
        content: [
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Shortbread Crust",
            items : ["1 cup unsalted butter, softened (226g)", "⅓ cup sugar (70g)", "⅓ cup light brown sugar, packed (70g)", "1 large egg yolk", "¾ teaspoon vanilla extract", "½ teaspoon salt", "2 ¼ cups all-purpose flour (260g)"]
          },
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Caramel",
            items : ["2 14-oz cans sweetened condensed milk (792g)", "14 Tablespoons butter cut into Tablespoon-sized pieces (198g)", "1 cup light brown sugar packed (200g)", "⅓ cup light corn syrup (80ml)", "1 teaspoon vanilla extract", "¼ teaspoon salt"]
          },
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Chocolate Ganache",
            items : ["2 cups semisweet chocolate chips (340g)", "½ cup heavy cream (120ml)", "½ teaspoon vanilla extract (5ml)", "sea salt for sprinkling"]
          },
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Shortbread Crust Instructions",
            items : ["Preheat oven to 350F (177C) and line a 13x9 baking pan with parchment paper.", "Using an electric mixer, beat butter until well creamed.", "Add sugars and beat until light and fluffy, about 30 seconds.", "Add egg yolk and vanilla extract and stir well, pausing to scrape down the sides and mixing until ingredients are well-combined.", "Add flour, gradually (about ½ cup at a time), pausing to scrape down sides of bowl. Halfway through the addition of the flour, sprinkle in the salt with the beater still running.", "Don't over-beat the dough, you want it to be slightly crumbly to make it easier to press into the pan.", "Drop dough over prepared pan and gently, firmly, evenly, press dough into the bottom of the pan.  To make it easier, I usually lay a piece of wax paper over the dough and use the palm of my hand to smooth the surface (and then discard wax paper).", "Bake on 350F (177C) for 20-25 minutes -- edges should be lightly golden brown.", "Allow to cool while you prepare your caramel topping."]
          },
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Caramel Instructions",
            items : ["Combine condensed milk, butter, brown sugar, and corn syrup in a medium-sized saucepan over medium heat.", "Stir frequently until butter is melted and ingredients are well-combined. Continue to stir constantly until mixture begins to boil (this could take several minutes, but you don't need to increase the heat).", "Once mixture comes to a boil, reduce heat to a simmer (slowly bubbling), still stirring constantly.  Continue to stir 10-15 minutes until mixture turns a rich caramel color and has thickened (should begin pulling away from the sides of the pot as you stir).", "Remove from heat and immediately stir in the vanilla extract and salt.", "Pour evenly over prepared shortbread, use a knife to spread evenly if needed.", "Allow to cool at room temperature for several hours or in the refrigerator for 1 hour before topping with chocolate."]
          },
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Chocolate Ganache Instructions",
            items : ["Combine chocolate chips and heavy cream in a small saucepan over medium heat.  ", "Stir frequently until chocolate is melted and mixture is smooth.  ", "Remove from heat and stir in vanilla extract.  Allow chocolate to cool just slightly for about 5 minutes, and then evenly spread over prepared caramel layer.  Wait several minutes and then sprinkle with sea salt.  ", "Allow chocolate to harden (I recommend placing in refrigerator for about 30 minutes -- my family prefers these treats refrigerated anyway) before cutting and serving."]
          }, 
        ] 
      
      }, 
    2: {
        id : 2,
        title : "Peanut Sauce Stir-Fry",
        date: "June 02 2021",
        categories: ["dinner"],
        mainImage : "./recipe_photos/peanut-sauce-stir-fry.jpeg",
        options: {
                  
        },
        content: [
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Ingredients",
            items : ["1/4 cup peanut butter","1/2 cup applesauce","1/4 cup tamari or soy sauce","2 cloves of garlic or 1 teaspoon garlic powder","1/2 teaspoon minced ginger","1/8 teaspoon cayenne pepper (optional)"]
          },
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ]
    }, 
    3: {
        id : 3,
        title : "Power Salad",
        date: "Auguest 25 2021",
        categories: ["dinner"],
        mainImage : "./recipe_photos/power-salad.jpeg",
        options: {
                  
        },
        content: [
          { 
            type : "list",
            title : "Salad",
            items : ["1 cup quinoa", "1 bunch kale, ribs removed and chopped into very small, bite-sized pieces", "2 tablespoons olive oil", "1 medium lime, juiced", "1/2 teaspoon salt", "1 (14-ounce) can black beans, rinsed and drained, or 1 ½ cups cooked black beans", "1/3 cup crumbled feta, omit for vegan/dairy-free salad", "1/4 cup pepitas (green pumpkin seeds)"]
          },
          { 
            type : "list",
            title : "Sweet potatoes",
            items : ["1 cup white rice flour", "1/2 teaspoon ground", "1/2 teaspoon paprika ","1/2 teaspoon kosher salt ","1/4 teaspoon freshly ground black pepper ","1 medium head cauliflower, cut into 2- to 3-inch florets, stems reserved for another use ","1/2 cup barbecue sauce","2 tablespoons unsalted butter "]
          },
          { 
            type : "list",
            title : "Avocado sauce",
            items : ["2 avocados, sliced into long strips", "2 limes, juiced", "2 tablespoons olive oil", "1 medium jalapeño, deseeded, membranes removed and roughly chopped", "1 handful cilantro leaves", "½ teaspoon ground coriander, optional", "Salt, to taste",]
          },
        ]
    }, 
    4: {
        id : 4,
        title : "Buffalo Cauliflower",
        date: "April 04 2021",
        categories: ["dinner"],
        mainImage : "./recipe_photos/butter-cauliflower.jpeg",
        options: {
                  
        },
        content: [
          { 
            type : "list",
            image : "https://picsum.photos/seed/picsum/200/300",
            title : "Ingredients",
            items : ["1 cup white rice flour", "1/2 teaspoon ground", "1/2 teaspoon paprika ","1/2 teaspoon kosher salt ","1/4 teaspoon freshly ground black pepper ","1 medium head cauliflower, cut into 2- to 3-inch florets, stems reserved for another use ","1/2 cup barbecue sauce","2 tablespoons unsalted butter "]
          },
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ]
    }, 
  }
}

const runningPosts = {
  title: "Running",
  route : "runnining",
  posts : {  
    1 : {
        id: 1,
        title : "Moab 240",
        date: "June 02 2020",
        mainImage : "https://picsum.photos/seed/picsum/200/300",
        options: {
                  
        },
        content: [
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ]
    }, 
    2: {
        id : 2,
        title : "Tahoe 200",
        date: "June 03 2019",
        mainImage : "https://picsum.photos/seed/picsum/200/300",
        options: {           
        },
        content: [
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ]
    }, 
    3: {
        id : 3,
        title : "Bigfoot 200",
        date: "June 02 2018",
        mainImage : "https://picsum.photos/seed/picsum/200/300",
        options: {
                  
        },
        content: [
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ]
    }, 
    4: {
        title : "Haliburton 100",
        date: "June 02 2017",
        id : 4,
        mainImage : "https://picsum.photos/seed/picsum/200/300",
        options: {
                  
        },
        content: [
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          { 
            type : "",
            image : "https://picsum.photos/seed/picsum/200/300",
            text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum., Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ]
    }, 
  }
}





export default function App() {
  

 

  return (
    <div className="App">
      <Router>
        <Nav 
            
        />
        <Switch>
          <Route path="/cooking">
            <Blog
            key={0}
            data={cookingPosts}
            />
          </Route>
          <Route path="/running">
            <Blog
              key={1}
              data={runningPosts}
              />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

