import React from 'react';
import { MenuItem, Select } from '@mui/material';
import styles from './DateInput.module.scss';

const DateInput = ({
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
}) => {
  return (
    <div className={styles.dateWrapper}>
      <div className={`${styles.dayInput} ${styles.input}`}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={day}
          renderValue={selected => {
            if (selected.length === 0) {
              return <span>DD</span>;
            }
            return selected;
          }}
          label="Age"
          onChange={onDayChange}
        >
          <MenuItem disabled value="">
            <span>DD</span>
          </MenuItem>
          <MenuItem value="01">01</MenuItem>
          <MenuItem value="02">02</MenuItem>
          <MenuItem value="03">03</MenuItem>
          <MenuItem value="04">04</MenuItem>
          <MenuItem value="05">05</MenuItem>
          <MenuItem value="06">06</MenuItem>
          <MenuItem value="07">07</MenuItem>
          <MenuItem value="08">08</MenuItem>
          <MenuItem value="09">09</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="11">11</MenuItem>
          <MenuItem value="12">12</MenuItem>
          <MenuItem value="13">13</MenuItem>
          <MenuItem value="14">14</MenuItem>
          <MenuItem value="15">15</MenuItem>
          <MenuItem value="16">16</MenuItem>
          <MenuItem value="17">17</MenuItem>
          <MenuItem value="18">18</MenuItem>
          <MenuItem value="19">19</MenuItem>
          <MenuItem value="20">20</MenuItem>
          <MenuItem value="21">21</MenuItem>
          <MenuItem value="22">22</MenuItem>
          <MenuItem value="23">23</MenuItem>
          <MenuItem value="24">24</MenuItem>
          <MenuItem value="25">25</MenuItem>
          <MenuItem value="26">26</MenuItem>
          <MenuItem value="27">27</MenuItem>
          <MenuItem value="28">28</MenuItem>
          <MenuItem value="29">29</MenuItem>
          <MenuItem value="30">30</MenuItem>
          <MenuItem value="31">31</MenuItem>
        </Select>
      </div>
      <div className={`${styles.dayInput} ${styles.input}`}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={month}
          renderValue={selected => {
            if (selected.length === 0) {
              return <span>MM</span>;
            }
            return selected;
          }}
          label="Age"
          onChange={onMonthChange}
        >
          <MenuItem disabled value="">
            <span>MM</span>
          </MenuItem>
          <MenuItem value="01">01</MenuItem>
          <MenuItem value="02">02</MenuItem>
          <MenuItem value="03">03</MenuItem>
          <MenuItem value="04">04</MenuItem>
          <MenuItem value="05">05</MenuItem>
          <MenuItem value="06">06</MenuItem>
          <MenuItem value="07">07</MenuItem>
          <MenuItem value="08">08</MenuItem>
          <MenuItem value="09">09</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="11">11</MenuItem>
          <MenuItem value="12">12</MenuItem>
        </Select>
      </div>
      <div className={`${styles.yearInput} ${styles.input}`}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={year}
          renderValue={selected => {
            if (selected.length === 0) {
              return <span>YYYY</span>;
            }
            return selected;
          }}
          label="Age"
          onChange={onYearChange}
        >
          <MenuItem disabled value="">
            <span>YYYY</span>
          </MenuItem>
          <MenuItem value="2000">2000</MenuItem>
          <MenuItem value="1999">1999</MenuItem>
          <MenuItem value="1998">1998</MenuItem>
          <MenuItem value="1997">1997</MenuItem>
          <MenuItem value="1996">1996</MenuItem>
          <MenuItem value="1995">1995</MenuItem>
          <MenuItem value="1994">1994</MenuItem>
          <MenuItem value="1993">1993</MenuItem>
          <MenuItem value="1992">1992</MenuItem>
          <MenuItem value="1991">1991</MenuItem>
          <MenuItem value="1990">1990</MenuItem>
          <MenuItem value="1989">1989</MenuItem>
          <MenuItem value="1988">1988</MenuItem>
          <MenuItem value="1987">1987</MenuItem>
          <MenuItem value="1986">1986</MenuItem>
          <MenuItem value="1985">1985</MenuItem>
          <MenuItem value="1984">1984</MenuItem>
          <MenuItem value="1983">1983</MenuItem>
          <MenuItem value="1982">1982</MenuItem>
          <MenuItem value="1981">1981</MenuItem>
          <MenuItem value="1980">1980</MenuItem>
          <MenuItem value="1979">1979</MenuItem>
          <MenuItem value="1978">1978</MenuItem>
          <MenuItem value="1977">1977</MenuItem>
          <MenuItem value="1976">1976</MenuItem>
          <MenuItem value="1975">1975</MenuItem>
          <MenuItem value="1974">1974</MenuItem>
          <MenuItem value="1973">1973</MenuItem>
          <MenuItem value="1972">1972</MenuItem>
          <MenuItem value="1971">1971</MenuItem>
          <MenuItem value="1970">1970</MenuItem>
          <MenuItem value="1969">1969</MenuItem>
          <MenuItem value="1968">1968</MenuItem>
          <MenuItem value="1967">1967</MenuItem>
          <MenuItem value="1966">1966</MenuItem>
          <MenuItem value="1965">1965</MenuItem>
          <MenuItem value="1964">1964</MenuItem>
          <MenuItem value="1963">1963</MenuItem>
          <MenuItem value="1962">1962</MenuItem>
          <MenuItem value="1961">1961</MenuItem>
          <MenuItem value="1960">1960</MenuItem>
          <MenuItem value="1959">1959</MenuItem>
          <MenuItem value="1958">1958</MenuItem>
          <MenuItem value="1957">1957</MenuItem>
          <MenuItem value="1956">1956</MenuItem>
          <MenuItem value="1955">1955</MenuItem>
          <MenuItem value="1954">1954</MenuItem>
          <MenuItem value="1953">1953</MenuItem>
          <MenuItem value="1952">1952</MenuItem>
          <MenuItem value="1951">1951</MenuItem>
          <MenuItem value="1950">1950</MenuItem>
          <MenuItem value="1949">1949</MenuItem>
          <MenuItem value="1948">1948</MenuItem>
          <MenuItem value="1947">1947</MenuItem>
          <MenuItem value="1946">1946</MenuItem>
          <MenuItem value="1945">1945</MenuItem>
          <MenuItem value="1944">1944</MenuItem>
          <MenuItem value="1943">1943</MenuItem>
          <MenuItem value="1942">1942</MenuItem>
          <MenuItem value="1941">1941</MenuItem>
          <MenuItem value="1940">1940</MenuItem>
          <MenuItem value="1939">1939</MenuItem>
          <MenuItem value="1938">1938</MenuItem>
          <MenuItem value="1937">1937</MenuItem>
          <MenuItem value="1936">1936</MenuItem>
          <MenuItem value="1935">1935</MenuItem>
          <MenuItem value="1934">1934</MenuItem>
          <MenuItem value="1933">1933</MenuItem>
          <MenuItem value="1932">1932</MenuItem>
          <MenuItem value="1931">1931</MenuItem>
          <MenuItem value="1930">1930</MenuItem>
          <MenuItem value="1929">1929</MenuItem>
          <MenuItem value="1928">1928</MenuItem>
          <MenuItem value="1927">1927</MenuItem>
          <MenuItem value="1926">1926</MenuItem>
          <MenuItem value="1925">1925</MenuItem>
          <MenuItem value="1924">1924</MenuItem>
          <MenuItem value="1923">1923</MenuItem>
          <MenuItem value="1922">1922</MenuItem>
          <MenuItem value="1921">1921</MenuItem>
          <MenuItem value="1920">1920</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default DateInput;
