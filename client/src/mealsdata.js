const meals = [
  {
    name: 'Classic Burger',
    varients:[
      'small',
      'medium',
      'large'
    ],
    description: 'A juicy beef patty topped with cheddar cheese, lettuce, tomato, pickles, and our special house sauce. Served with a side of crispy fries.',
    prices:[
      {
        'small': 200,
        'medium': 300,
        'large':350
      },
    ],
    allergens: ['Gluten', 'Dairy'],
    imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F16%2FClassic-Cheese-Burger-PNG-Transparent-Image.png&tbnid=D2C1ia1TbKZ6HM&vet=12ahUKEwiPgdGEr8j_AhUVkicCHedsD6oQMygCegUIARDNAQ..i&imgrefurl=https%3A'
  },
  {
    mealName: 'Margherita Pizza',
    description: 'Traditional Neapolitan pizza topped with fresh mozzarella cheese, tomatoes, basil leaves, and a drizzle of olive oil. Baked to perfection in our wood-fired oven.',
    varients:[
      'small',
      'medium',
      'large',
    ],
    prices:[
      {
        'small':800,
        'medium':1100,
        'large':1400
      }
    ],
    allergens: ['Gluten', 'Dairy'],
    imageUrl: 'image-url-2.jpg'
  },
  {

    mealName: 'Teriyaki Chicken',
    description: 'Grilled chicken marinated in a tangy teriyaki sauce, served with steamed rice, stir-fried vegetables, and a side of miso soup.',
    varients:[
      'small',
      'medium',
      'large',
    ],
     prices:[
      {
        'small':350,
        'medium':600,
        'large':750
      }
    ],
    allergens: ['Soy', 'Gluten'],
    imageUrl: 'image-url-3.jpg'
  },
  {
    mealName: 'Spaghetti Bolognese',
    description: 'Al dente spaghetti pasta topped with a hearty meat sauce made from ground beef, tomatoes, onions, and aromatic herbs. Finished with grated Parmesan cheese.',
    varients:[
      'small',
      'medium',
      'large',
    ],
    prices:[
      {
        'small':500,
        'medium':800,
        'large':1000
      }
    ],
    allergens: ['Gluten', 'Dairy'],
    imageUrl: 'image-url-4.jpg'
  },
  {
    mealName: 'Vegetarian Wrap',
    description: 'A delicious wrap filled with grilled vegetables, hummus, feta cheese, and a touch of tangy tzatziki sauce. Served with a side of mixed greens.',
    varients:[
      'small',
      'medium',
      'large',
    ],
    prices:[
      {
        'small':400,
        'medium':600,
        'large':750
      }
    ],
    allergens: ['Gluten', 'Dairy'],
    imageUrl: 'image-url-5.jpg'
  },
  {
    mealName: 'Sushi Platter',
    description: 'A delightful assortment of fresh nigiri sushi and maki rolls. Includes tuna, salmon, shrimp, California rolls, and cucumber rolls. Served with soy sauce and wasabi.',
    varients:[
      'small',
      'medium',
      'large',
    ],
    prices:[
      {
        'small':350,
        'medium':600,
        'large':750
      }
    ],
    allergens: ['Seafood', 'Soy', 'Gluten'],
    imageUrl: 'image-url-6.jpg'
  }
];


export default meals;