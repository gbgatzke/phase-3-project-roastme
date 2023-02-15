class ReviewController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        puts params[:id]
        render json: CoffeeType.find(params[:id])
    end

    def create
        review = Review.create!(review_params)
        render json: review
    end

    def update
        review = Review.find(params[id])
        review.update!(review_params)
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:reviewer_name, :review_body, :rating, :coffee_type_id)
    end
end