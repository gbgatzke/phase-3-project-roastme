class RoasterController < ApplicationController
    
    def index
       render json: Roaster.all 
    end

    def create
        roaster = Roaster.create!(roaster_params)
        render json: roaster
    end

    def show
        render json: Roaster.find(params[:id])
    end

    private

    def roaster_params
        params.permit(:name, :img_url, :website_url)
    end
end