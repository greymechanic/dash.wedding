import MarqueeReverse from "./MarqueeReverse";

function FAQ() {
  return (
    <div>
      <div className="container tinted">
        <section>
          <h2>F.A.Q.</h2>
          <div className="two-up">
            <div>
              <div>
                <h3>what is dash bash?</h3>
                <p>
                  {"Instead of taking either of our last names, we’ve decided to take a new last name together. We’ve spent a lot of time thinking about what our new last name should be, and we’ve decided on Dash. We like it because it’s short and easy to spell, but most importantly, it represents us bringing our names together into one. Instead of hyphenating our last name to be “Jochum [dash]` Kaye” or “Kaye [dash] Jochum”, it’s just Dash. We’re excited about joining our lives together symbolically with this new family name! We’re calling our wedding the Dash Bash for this reason."}
                </p>
              </div>
              <div>
                <h3>when should i rsvp?</h3>
                <p>
                  {"We would appreciate if everyone could RSVP by May 1 at the latest. This will give us enough time to plan food and drinks for everyone."}
                </p>
              </div>
              <div>
                <h3>what's the schedule?</h3>
                <p>
                  {"If you are in town on Friday and would like to join us for a pre-wedding drink, we will be meeting at Skates on the Bay at 8pm. On Saturday, please arrive at 4:30pm at our house. The ceremony will start right away, followed by a cocktail party with plenty of food, drinks, and dancing. If you’d rather not spend your hangover alone, we’ll be hosting a casual brunch at our house from 11am–2pm on Sunday so we can gulp down the remaining beers still lying around. More details here."}
                </p>
              </div>
              <div>
                <h3>what about covid?</h3>
                <p>
                  {"We are requiring vaccination or a negative test on the day of the wedding for entry. Please be respectful of this request, as it makes us all feel safer in large groups, especially with older guests in attendance. Because of the rapidly changing world we live in, we may loosen or tighten these precautions as it gets closer to the wedding day. Thanks for being patient with us, and we cannot wait to see you and hug you in person!"}
                </p>
              </div>
              <div>
                <h3>what will i eat?</h3>
                <p>
                  {"We will not have a sit-down dinner, but there will be plenty of food and you will not leave hungry! We will have pizzas and salads from Lucia’s, and plenty of snacks throughout the night, as well as a full bar. If you have dietary restrictions, please let us know in your RSVP."}
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 id="dress-code">what should i wear?</h3>
                <p>
                  {"Wear whatever you’re comfortable in. Fancy or casual, it’s up to you. If you really need creative direction, may we offer “garden party chic” or “backyard bonanza” as inspiration? Does that help? No? We truly don’t care what you wear, we’re just excited to celebrate with you. The entire event is outside—it will likely start warm and then get cold as the sun goes down. It’s the Bay Area, so one thing is for sure: you will always need a light jacket. Also, our house is old and there is some uneven ground—wear heels at your own risk!"}
                </p>
              </div>
              <div>
                <h3>what will i eat?</h3>
                <p>
                  <a href="https://theclaremonthotel.com/" target="_blank">Claremont Hotel</a>: The Claremont is by far the nicest hotel in Berkeley, and the price shows it. If you want to splurge, this is where to do it. There are incredible views of the entire Bay Area from the property, and many of the rooms. There is a lovely pool and spa, and it's a quick 15 minute drive to our house.
                </p>
                <p>
                  <a href="https://www.graduatehotels.com/berkeley/" target="_blank">Graduate Hotel</a>: The Graduate Hotel is a more reasonably priced hotel located downtown close to UC Berkeley's campus, and a 10 minute drive to our house. We have a wedding discount code here, which will get you 20% off the lowest available rate at the time of booking, and is good for any dates you book. The hotel is a little funky, and the rooms are modestly sized, but overall it's a good price for the location.
                </p>
                <p>
                  <a href="https://www.berkeleycityclub.com/" target="_blank">Berkeley City Club</a>: Berkeley City Club is a historic hotel centrally located in downtown Berkeley, and a 10 minute drive from our house. The rooms are modest, but the architecture is lovely and the indoor pool is beautifully unique. The price is similar to the Graduate Hotel.
                </p>
                <p>
                  There are also <a href="#" target="_blank">quite a few AirBnB options</a> close to our house, which may end up being cheaper than a hotel.
                </p>
                <p>
                  We recommend booking a hotel or Airbnb as soon as possible, as wedding season this year is expected to be incredibly busy, and I would imagine things will book up if you wait too long.
                </p>
              </div>
              <div>
                <h3>how should i get there?</h3>
                <p>
                  {"In order to be courteous to our neighbors, we are encouraging all guests to Lyft/Uber to the wedding. Plus, we’ll have a full bar for you to enjoy, so be safe and hail a ride. If you are driving, there will be free street parking in our neighborhood."}
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
      <MarqueeReverse />
    </div>
  );
}

export default FAQ;