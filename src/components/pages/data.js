let data = [
  [
      {
          "name": "Rose",
          "id": 1,
          "description": "Roses are beautiful flowering plants belonging to the Rosaceae family. Popular in gardens, they are loved for their vibrant colors and aromatic fragrance. Maharashtra, particularly Pune, has ideal conditions for growing roses due to its moderate climate.",
          "price": 12,
          "rating": 4.5,
          "reviews": [
              {
                  "username": "AaravGardener",
                  "rating": 5,
                  "comment": "Absolutely love this rose! The vibrant red color brightens up my garden.",
                  "productDelivered": true,
                  "dateTime": "2024-11-20T10:15:00",
                  "likes": 42,
                  "dislikes": 2
              },
              {
                  "username": "MahiGreen",
                  "rating": 5,
                  "comment": "Great product. It was well-packaged, and the plant arrived in perfect condition.",
                  "productDelivered": true,
                  "dateTime": "2024-11-19T15:48:00",
                  "likes": 35,
                  "dislikes": 1
              },
              {
                  "username": "AdvikaDecor",
                  "rating": 4,
                  "comment": "The plant looks amazing! But I wish the pot was a bit larger for more stability.",
                  "productDelivered": true,
                  "dateTime": "2024-11-18T20:30:00",
                  "likes": 27,
                  "dislikes": 0
              },
              {
                  "username": "RudraNature",
                  "rating": 5,
                  "comment": "Very easy to maintain. It's growing beautifully in my garden.",
                  "productDelivered": true,
                  "dateTime": "2024-11-17T14:10:00",
                  "likes": 30,
                  "dislikes": 3
              }
          ]
      }
  ]
];

{/* <img
className="relative md:h-[60vh] sm:h-[40vh]   md:w-[40vw]  sm:w-[20vw]"
src='https://t3.ftcdn.net/jpg/03/05/38/82/360_F_305388219_0V2CURNjS4CHD57xGXyukI2kBzr2v9ml.jpg'
></img>
<form
onSubmit={handleSubmit}
className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] flex flex-col gap-5 sm:gap-6 rounded-xl shadow-2xl p-6 bg-transparent mr-96"
>
{/* Username Input */}
<input
required
type="text"
name="username"
value={state.username} // Use `state.username` here
placeholder="Username"
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
onChange={handleChange}
/>

{/* Password Input */}
<input
required
type="password"
name="password"
value={state.password} // Use `state.password` here
placeholder="Password"
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
onChange={handleChange}
/>

{/* Email Input */}
<input
required
type="email"
name="email"
value={state.email} // Use `state.email` here
placeholder="Email"
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
onChange={handleChange}
/>

{/* Contact Input */}
<input
required
type="text"
name="contact"
value={state.contact} // Use `state.contact` here
placeholder="Contact"
className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
onChange={handleChange}
/>

<button
type="submit"
className="w-[50%] mx-24 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
Sign Up
</button>
</form>
 
