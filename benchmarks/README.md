# Performance Benchmark Results

## 1. Array vs Map

| Products | Array Search | Map Search |
|---|---:|---:|
| 100 | 0.109 ms | 0.013 ms |
| 1,000 | 0.153 ms | 0.010 ms |
| 10,000 | 0.379 ms | 0.009 ms |

Both methods returned the same product for every test.

## 2. Array vs Set

| SKU Entries | Array Detection | Set Detection |
|---|---:|---:|
| 101 | 0.116 ms | 0.032 ms |
| 1,001 | 1.766 ms | 0.108 ms |
| 10,001 | 167.586 ms | 4.845 ms |

Both methods correctly detected duplicate SKUs.

## 3. Observations

- Map lookup was faster than Array search in our tests.
- Set duplicate detection was faster than Array duplicate detection.
- Execution times increased as the dataset grew.
- Results are based on our local Node.js environment.
- Execution times may vary between runs.