-- Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

-- For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

-- Constraint:

-- 1 <= month <= 12

-- DB[:quarterof].multi_insert([
--   {month: 3}, 
--   {month: 8},
--   {month: 11}
-- ])

-- results = run_sql

-- describe :columns do
--    it "should return 2 columns" do
--     expect(results.columns.count).to eq 2
--    end
-- end

-- describe :column_names do
--    it "should match column names" do
--      expect(results.columns[0].to_s).to eq "month" 
--      expect(results.columns[1].to_s).to eq "res" 
--    end
-- end

-- compare_with expected do end

SELECT 
    month,
    CASE 
        WHEN month BETWEEN 1 AND 3 THEN 1
        WHEN month BETWEEN 4 AND 6 THEN 2
        WHEN month BETWEEN 7 AND 9 THEN 3
        ELSE 4
    END AS res
FROM quarterof;