import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Load products': emptyProps(),
    'Select product': props<{ productId: number }>(),
    'Clear Selection': emptyProps(),
  }
})

export const ProductsApiActions = createActionGroup({
  source: 'Products API',
  events: {
    'Load Products Success': props<{ products: any[] }>(),
    'Load Products Failure': props<{ error: string }>(),
  },
});
