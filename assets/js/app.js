// @TODO: YOUR CODE HERE!
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

var chartWidth = svgWidth - margin.left - margin.right + 10;
var chartHeight = svgHeight - margin.top - margin.bottom - 10;

// create an SVG wrapper, append an SVG group that will hold our chart, 
// and shift the latter by left and top margins. 

var svg = d3
    .select("scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Append an SVG group
var chartGroup = svg.append("g")
    .attr("tranform", `translate(${margin.left}, ${margin.top})`);

// Initial Param
var chosenXAxis = "smokes";
var chosenYAxis = "age";

// function used for updating x-scale var upon click on axis label
function xScale(data, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenXAxis]) * 0.8,
        d3.max(data, d => d[chosenXAxis]) * 1.2])
        .range([0, chartWidth]);

    return xLinearScale;

}

// function used for updating y-scale var upon click on axis label
function yScale(data, chosenYAxis) {
    // create scales
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenYAxis]) * 0.8,
        d3.max(data, d => d[chosenYAxis]) * 1.2])
        .range([chartHeight, 0]);
    return yLinearScale;
}

// function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);

    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);

    return xAxis;
}

// function used for updating yAxis var upon click
function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);

    yAxis.transition()
        .duration(1000)
        .call(leftAxis);

    return yAxis;

}

// function used for updating circles group 
function renderXCircles(circlesGroup, newXScale, chosenXAxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]));

    return circlesGroup;
}

function renderYCircles(circlesGroup, newYScale, chosenYAxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cy", d => newYScale(d[chosenYAxis]));

    return circlesGroup;
}

// function used for updating Circle text group
function renderXCircleText(textCircles, newXScale, chosenXAxis) {

    textCircles.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[chosenXAxis]));
    return textCircles;
}

function renderYCircleText(textCircles, newYScale, chosenYAxis) {

    textCircles.transition()
        .duration(1000)
        .attr("y", d => newYScale(d[chosenYAxis]) + 4);

    return textCircles;
}

//function used for updating circles group with new tooltip

function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {

    var xlabel;
    var ylabel;

    if (chosenXAxis === "smokes") {

        xlabel = "Smokers:"
    }
    else if (chosenXAxis === "healthcare") {
        xlabel = "No Healthdcare:"
    }
    else {
        xlabel = "Obese:"
    }

    if (chosenYAxis === "age") {
        ylabel = "Age:"
    }
    else if (chosenYAxis === "income") {
        ylabel = "Income:"
    }
    else {
        ylabel = "Poverty:"
    }

    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([40, 60])
        .html(function (d) {
            return (`<strong>${d.state}</strong>
                <br>${xlabel} ${d[chosenXAxis]}
                <br>${ylabel} ${d[chosenYaxis]}`);
        });

    circlesGroup.call(toolTip);

    circlesGroup.on("mouseover", function (data) {
        toolTip.show(data);
    })
        // onmouse event
        .on("mouseout", function (data, index) {
            toolTip.hide(data);
        });

    return circlesGroup;
}

(async function () {
    var data = await d3.csv("assets/data/data.csv".catch(err => console.log(err)))


    // Parse data. Convert csv data to integers
    data.forEach(function (data) {
        data.id = +data.id;
        data.poverty = +data.poverty;
        data.povertyMoe = +data.povertyMoe;
        data.age = +data.age;
        data.ageMoe = +data.ageMoe;
        data.income = +data.income;
        data.incomeMoe = +data.incomeMoe;
        data.healthcare = +data.healthcare;
        data.healthcareLow = +data.healthcareLow;
        data.healthcareHigh = +data.healthcareHigh;
        data.obesity = +data.obesity;
        data.obesityLow = +data.obesityLow;
        data.obesityHigh = +data.obesityHigh;
        data.smokes = +data.smokes;
        data.smokesLow = +data.smokesLow;
        data.smokesHigh = +data.smokesHigh;
    });