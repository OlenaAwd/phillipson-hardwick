const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const dbo = require("./db/conn");

const { Binary, Decimal128 } = require("mongodb");
const mongoose = require("mongoose");


async function main() {
    mongoose.connect(process.env.MONGO_DB_URL);
    console.log('mongo connected');
}

const clientSchema = new mongoose.Schema({
    source_ref: String,
    mk_list_id: String,
    mk_template_id: String,
    wh_ref: String,
    original_client_ref: String,
    title: String,
    first_name: String,
    las_name: String,
    email: String,
    mobile_phone: String,
    date_of_birth: Date,
    employment_status: String,
    income_bracket: String,
    address1: String,
    address2: String,
    city: String,
    county: String,
    postcode: String,
    signature: String,
    ni_number: String, 
    married: Boolean,
    required_uniform: Boolean,
    pba_ppi_claim: Boolean,
    asked_to_work_from_home: Boolean,
    vehicle_required: Boolean,
    self_assessment: Boolean,
    ppi_compensation_total: String,
    ppi_compensation_years: Array,
    ppi_lenders: Array,
    claim_type: String,
    wfh_2020: Boolean,
    wfh_2021: Boolean,
    employer_name: String,
    industry: String,
    job_title: String
  
});

const Client = mongoose.model('Client', clientSchema)


app.get("/", (req, resp) => {
    resp.send("api is on")
});


app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});