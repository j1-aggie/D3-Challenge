# D3 Homework - Data Journalism and D3

![Newsroom](https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif)

## Background

Welcome to the newsroom! You've just accepted a data visualization position for a major metro paper. You're tasked with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand your findings.

The editor wants to run a series of feature stories about the health risks facing particular demographics. She's counting on you to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the assignment is based on 2014 ACS 1-year estimates from the [US Census Bureau](https://data.census.gov/cedsci/), but you are free to investigate a different data set. The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

### Before You Begin

1. Created a new repository for this project called `D3-Challenge`. 

2. Cloned the new repository to my computer.

3. Inside my local git repository, created a directory for the D3 challenge. Use the folder name to correspond to the challenge: **D3_data_journalism**.

4. This homework utilizes both **html** and **Javascript** so all the necessary files are included. You will need these files to run for analysis.

5. All was pushed to GitHub.

## The Task

### Core Assignment: D3 Dabbler (Required Assignment)

![scatter plot](https://user-images.githubusercontent.com/66078772/99895956-b07eb880-2c51-11eb-820d-e04698aecce3.PNG)

Created a scatter plot between two of the data variables such as `Lacks Healthcare vs. Poverty` or `Smokers vs. Age`.

I used the D3 techniques that was taught in class, created a scatter plot that represents each state with circle elements. I coded this graphic in the `app.js` file of my homework directory—making sure to pull in the data from `data.csv` by using the `d3.csv` function. My scatter plot appears like the image at the top of this section.

* Include state abbreviations in the circles.

* Create and situate your axes and labels to the left and bottom of the chart.

* Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.

- - -

### Bonus: Impress the Boss (Optional Assignment)


![scatter with tip](https://user-images.githubusercontent.com/66078772/99896138-4535e600-2c53-11eb-8fb4-2446dba21dc0.PNG)

No more static visulizations when D3 allows to now interact with our sites.

#### 1. More Data, More Dynamics
I included more demographics and more risk factors. Placed additional labels in my scatter plot and gave them click events so that my users can decide which data to display. Animated the transitions for your circles' locations as well as the range of my axes. I did this for two risk factors for each axis. Or, to complete the extreme challenge, I created three for each axis.


#### 2. Incorporated d3-tip

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Add tooltips to your circles and display each tooltip with the data that the user has selected. Use the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged)—we've already included this plugin in your assignment directory.


### Requirements/Assessment

Final product will be assessed on the following metrics:

* Creation of a **new** repository on GitHub called `D3-Challenge` (note the kebab-case). Do not add to an already existing repo.

* Completion of all steps in the core assignment

* Coherency of scatter plot (labels, ticks)

* Visual attraction

* Professionalism

* Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file




