<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div style="max-width: 800px;margin: auto;padding: 16px;border: 1px solid #eee;font-size: 16px;line-height: 24px;font-family: 'Inter', sans-serif;color: #555;background-color: #F9FAFC;">
  <table style="font-size: 12px; line-height: 20px;">
    <thead>
      <tr>
        <td style="padding: 0 16px 18px 16px;">
          <h1 style="color: #1A1C21;font-size: 18px;font-style: normal;font-weight: 600;line-height: normal;">
           Speedoz Limited</h1>
          <p>hello@email.com</p>
          <p>+44 7766002333</p>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <table style="background-color: #FFF; padding: 20px 16px; border: 1px solid #D7DAE0;width: 100%; border-radius: 12px;font-size: 12px; line-height: 20px; table-layout: fixed;">
            <tbody>
              <tr>
                <td colspan="3">
                  <table style="width: 100%;border-spacing: 0;">
                    <thead>
                      <tr style="text-transform: uppercase;">
                        <td style="padding: 8px 0; border-block:1px solid #D7DAE0;">Item Details</td>
                        <td style="padding: 8px 0; border-block:1px solid #D7DAE0; ">Price
                        </td>
                        <td style="padding: 8px 0; border-block:1px solid #D7DAE0;text-align: center;">Quantity
                        </td>
                        <td style="padding: 8px 0; border-block:1px solid #D7DAE0; text-align: end; width: 120px;">
                          Amount</td>
                      </tr>
                    </thead>
                    <tbody>
                    @foreach ($order as $item)
                      <tr>
                        <td style="padding-block: 12px;">
                          <p style="font-weight: 700; color: #1A1C21;">{{ $item['name'] }}</p>
                        </td>
                        <td style="padding-block: 12px;">
                          <p style="font-weight: 700; color: #1A1C21;">{{ $item['regular_price'] }}</p>
                        </td>
                        <td style="padding-block: 12px;">
                          <p style="font-weight: 700; color: #1A1C21; text-align: center;">{{ $item['quantity'] }}</p>
                        </td>
                        <td style="padding-block: 12px;">
                          <p style="font-weight: 700; color: #1A1C21; text-align: end;">{{ $item['regular_price'] * $item['quantity'] }}</p>
                        </td>
                      </tr>
                    @endforeach
                    </tbody>
                    <tfoot>
                      <tr>
                        <td style="padding: 12px 0; border-top:1px solid #D7DAE0;"></td>
                        <td style="border-top:1px solid #D7DAE0;" colspan="3">
                          <table style="width: 100%;border-spacing: 0;">
                            <tbody>
                              <tr>
                                <th style="padding-top: 12px;text-align: start; color: #1A1C21;">
                                  Subtotal</th>
                                <td style="padding-top: 12px;text-align: end; color: #1A1C21;">
                                  {{ $customer['total'] }}</td>
                              </tr>
                              <!-- <tr>
                                <th style="padding: 12px 0;text-align: start; color: #1A1C21;">
                                  VAT in items (0%) (1)</th>
                                <td style="padding: 12px 0;text-align: end; color: #1A1C21;">
                                  £5.00</td>
                              </tr> -->
                            </tbody>
                            <tfoot>
                              <!-- <tr>
                                <th style="padding: 12px 0 30px 0;text-align: start; color: #1A1C21;border-top:1px solid #D7DAE0;">
                                  Total Price (2)</th>
                                <th style="padding: 12px 0 30px 0;text-align: end; color: #1A1C21;border-top:1px solid #D7DAE0;">
                                  £5.00</th>
                              </tr> -->
                            </tfoot>
                          </table>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td style="padding-top: 30px;">
          <p style="display: flex; gap: 0 13px;"><span style="color: #1A1C21;font-weight: 700;">MealShift Ltd</span><span>1 Assam Street, London - E1 7QL</span><span>Registration number:12793366</span></p>
          <p style="color: #1A1C21;">Any questions, contact customer service at <a href="mailto:support@mealshift.co.uk" style="color: #000;">support@mealshift.co.uk</a>.</p>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
</body>
</html>